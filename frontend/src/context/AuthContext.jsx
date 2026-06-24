import React, { createContext, useState, useContext, useCallback } from 'react';
import api from '../api/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [loading, setLoading] = useState(false);
    const [authInitialized, setAuthInitialized] = useState(false);

    const login = async (username, password) => {
        const response = await api.post('/login/', { username, password });
        setAccessToken(response.data.access);
        const profile = await api.get('/profile/', {
            headers: { Authorization: `Bearer ${response.data.access}` }
        });
        setUser(profile.data);
        setAuthInitialized(true);
        return profile.data;
    };

    const register = async (userData) => {
        await api.post('/register/', userData);
    };

    const logout = async () => {
        try {
            if (accessToken) {
                await api.post('/logout/', {}, {
                    headers: { Authorization: `Bearer ${accessToken}` }
                });
            }
        } finally {
            setUser(null);
            setAccessToken(null);
        }
    };

    const refresh = async () => {
        const response = await api.post('/token/refresh/');
        setAccessToken(response.data.access);
        const profile = await api.get('/profile/', {
            headers: { Authorization: `Bearer ${response.data.access}` }
        });
        setUser(profile.data);
        return response.data.access;
    };

    /** Call only on recruiter/admin routes or login/register — not on candidate flow. */
    const initAuth = useCallback(async () => {
        if (authInitialized) return;
        setLoading(true);
        try {
            await refresh();
        } catch {
            setUser(null);
            setAccessToken(null);
        } finally {
            setAuthInitialized(true);
            setLoading(false);
        }
    }, [authInitialized]);

    return (
        <AuthContext.Provider value={{ user, accessToken, login, register, logout, refresh, initAuth, loading, authInitialized }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
