import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import paths from './paths';

const Navigation = () => {
  const auth = useSelector(state => state.authReducer?.auth);

  return (
    <Router >
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          {auth && (
            <>
              <Route path="/" element={<Navigate to="/app/dashboard" replace />} />
              <Route path="/app" element={<Navigate to="/app/dashboard" replace />} />
              {paths.protected.map(x => (
                <Route key={x.path} path={x.path} element={x.component}>
                  {x.children?.map(y => (
                    <Route key={y.path} path={`${x.path}/${y.path}`} element={y.component} />
                  ))}
                </Route>
              ))}
            </>
          )}
          {paths.public.map(x => (
            <Route key={x.path} path={x.path} element={x.component} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default Navigation;