import './globals.css';
import 'react-modal-video/scss/modal-video.scss';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { initKeycloak, getIsAuthenticated } from './keycloak';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Keycloak and handle authentication status
    initKeycloak((authenticated) => {
      if (!authenticated) {
        console.log("User not authenticated.");
        // Here you can handle unauthenticated users
        // For example, redirect to a public page or show a login prompt
      }
    });
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
