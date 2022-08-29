import React from 'react';
import { BackgroundImage } from '../../components/BackgroundImage/BackgroundImage';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import './Home.scss';

const BACKGROUND_IMAGE_URL = 'https://wallpaperaccess.com/full/842451.jpg';

export const Home: React.FC = () => {
    return <PageContainer>
        <BackgroundImage backgroundImage={BACKGROUND_IMAGE_URL} />
    </PageContainer>
}