// src/features/iam/hooks/useAuth.ts
import { useState, useEffect } from 'react';

// Tipagem para o usuário autenticado
interface CurrentUser {
  name: string;
  email: string;
  // Outras propriedades do usuário...
}

interface AuthState {
  isAuthenticated: boolean;
  currentUser: CurrentUser | null;
  // Funções de login/logout reais podem ser adicionadas aqui
}

export const useAuth = (): AuthState => {

  // ---- Versão de TESTE (descomente e use para simular o login) ----
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Altere para 'true'
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>({
    name: 'Fulano', // Nome de usuário fictício
    email: 'fulano@email.com',
  });

  return { isAuthenticated, currentUser };
};

/*
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}
*/