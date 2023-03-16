import React from 'react';

function About() {
    return (
        <div style={{ position: 'relative', top: '150px', textAlign: 'center' }}>
            <h2>About page:</h2>
            <h3>
                Food finder app with detailed recipe like and from what
                ingredients a particular dish is prepared, as well as a video
                cooking lesson.
            </h3>
            <h3>API used for development: https://www.themealdb.com/api.php</h3>
        </div>
    );
}

export { About };
