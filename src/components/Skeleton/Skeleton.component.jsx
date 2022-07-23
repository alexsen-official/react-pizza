import * as React from 'react';
import ContentLoader from 'react-content-loader';

export default function Skeleton() {
    return (
        <ContentLoader
            speed={ 2 }
            width="100%" height={ 500 }
            viewBox="0 0 100% 500"
            backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
            <rect x={ 0 } y={ 0 }
                  rx={ 10 } ry={ 10 }
                  width="100%" height="100%" />
        </ContentLoader>
    );
}
