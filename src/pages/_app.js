import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from 'next/head'
import Script from 'next/script'

import { Layout } from 'antd';
import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css'
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import { ToastContainer } from 'react-toastify';
import Navbar from '../components/navbar/Navbar'
import LoadingScreen from '../components/LoadingScreen';
import Notify from '../components/Notify';
import { connectMetaMask, connectNetwork } from '../redux/actions/walletAction';
import { GLOBALTYPES } from '../redux/actions/globalTypes';
import ParticlesEffect from '../components/ParticlesEffect';
import { wrapper } from '../redux/store';
const { Footer, Content } = Layout;

function App({Component, pageProps}) {

  const dispatch = useDispatch();
  const { theme, notify, wallet } = useSelector(state => state);

  if (typeof window !== 'undefined') {
    var defaultTheme = localStorage.getItem("theme")
    var metamask = localStorage.getItem("metamask")
  }

  useEffect(() => {
    if(defaultTheme){ 
      dispatch({
        type: GLOBALTYPES.THEME,
        payload: defaultTheme
      })
    }
  }, [defaultTheme])

  useEffect(() => {
    if(metamask && !wallet) {
      dispatch(connectMetaMask())   
    }
    dispatch(connectNetwork());
  }, [metamask, dispatch])

  useEffect(() => {
    AOS.init();
    import('bootstrap/dist/js/bootstrap')
  }, [])

  return (
    <>
    <Header>
      <meta charSet="utf-8" />
      <link rel="icon" href="/images/pd-logo.png" />
      <title>Pride Demons | NFTs</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    </Header>
      <Script src="https://kit.fontawesome.com/a9ebc0142a.js" crosOrigin="anonymous" />
      <Layout style={{minHeight: '100vh'}} className="layout" data-theme={theme ? theme : 'default'}>
        <ParticlesEffect />
        <ToastContainer 
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />
        {/* Navbar */}
        <Navbar/>
        <Content className="content">
          {/* Notify */}
          <Notify />
          {/* Loading Screen */}
          { notify.loading && <LoadingScreen /> }
          {/* Components */}
          <Component {...pageProps} />
        </Content>
        <Footer>
          <hr style={{color: 'var(--theme-red1)', borderRadius: '30px', opacity: '1'}}/>
          <p className='text-center'>
            ©2022, Pride Demons Design. All Rights Reserved. <br/>
            By {`{w3} G U I L D ;`}
          </p>
        </Footer>
      </Layout>
    </>
  );
}

export default wrapper.withRedux(App);
