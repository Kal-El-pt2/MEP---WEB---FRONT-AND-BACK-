'use client';

import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './StoreProvider';
import UserDashboard from './components/UserDashboard';
import UserDetailsForm from './components/UserDetails';

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route path="/" element={<UserDashboard/>} />
          <Route path="/user-details-edit" element={<UserDetailsForm />} />
        </Routes>
        {children}
      </Router>
    </StoreProvider>
  );
}
