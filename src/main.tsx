import {strictMode} from 'react';
import {creatRoot} from 'react-dom/client'
import app from './App.tsx';
import './index.css'

createRoot(document.getElementById (root)!).render(
<strictMode>
      <app/>
    </strictMode>
); 