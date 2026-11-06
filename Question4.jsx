import React from 'react';
import './Question4.css';

export default function App() {
    const [className, setClassName] = useState('');

    return (
        <div>
            <p className={className}>Style me!</p>
            <button onClick={() => setClassName('active')}>Toggle style</button>
        </div>
    );
}