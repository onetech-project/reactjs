import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Red, Navigate } from 'react-router-dom';
import paths from './paths';

const Navigation = () => {
  return (
    <Router>
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path="/" element={<Navigate to="/app/dashboard" replace />} />
          <Route path="/app" element={<Navigate to="/app/dashboard" replace />} />
          {paths.map(x => (
            <Route key={x.path} path={x.path} element={x.component}>
              {x.children?.map(y => (
                <Route key={y.path} path={`${x.path}${y.path}`} element={y.component} />
              ))}
            </Route>
          ))}
          <Route path="*" element={<>404</>} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default Navigation;