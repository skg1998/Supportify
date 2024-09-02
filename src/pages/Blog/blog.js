import React from 'react';
import Footer from "../../components/footer/footer";
import Header from '../../components/header/header';
import BreadCam from '../../components/breadcam/breadcam';
import BlogArea from '../../components/blogArea/blogArea';

const Blog = () => {
    return (
        <div>
            <Header />
            <BreadCam />
            <BlogArea />
            <Footer />
        </div>
    );
};

export default Blog;