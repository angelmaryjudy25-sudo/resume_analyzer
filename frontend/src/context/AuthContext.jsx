import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../api/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (username, password) => {
        const response = await api.post('/login/', { username, password });
        setAccessToken(response.data.access);
        const profile = await api.get('/profile/', {
            headers: { Authorization: `Bearer ${response.data.access}` }
        });
        setUser(profile.data);
    };

    const register = async (userData) => {
        await api.post('/register/', userData);
    };

    const logout = async () => {
        try {
            await api.post('/logout/', {}, {
                headers: { Authorization: `Bearer ${accessToken}` }
            });
        } finally {
            setUser(null);
            setAccessToken(null);
        }
    };

    const refresh = async () => {
        try {
            const response = await api.post('/token/refresh/');
            setAccessToken(response.data.access);
            const profile = await api.get('/profile/', {
                headers: { Authorization: `Bearer ${response.data.access}` }
            });
            setUser(profile.data);
            return response.data.access;
        } catch (error) {
            setUser(null);
            setAccessToken(null);
            throw error;
        }
    };

    useEffect(() => {
        const initAuth = async () => {
            try {
                await refresh();
            } catch (err) {
                // Not logged in or refresh expired
            } finally {
                setLoading(false);
            }
        };
        initAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ user, accessToken, login, register, logout, refresh, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
