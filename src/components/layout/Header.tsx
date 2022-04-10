import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
// import UnstyledLink from 'next/UnstyledLink';

// const links = [
//   { href: '/', label: 'Route 1' },
//   { href: '/', label: 'Route 2' },
// ];

export default function Header() {
  return (
    <header
      id='header'
      role='banner'
      className='sticky top-0 left-0 z-50 box-border w-full bg-transparent py-0 px-8 leading-4 text-black'
    >
      <div className='box-border flex w-full flex-col py-8 px-0 text-black'>
        <div
          id='siteTitleWrapper'
          className='box-border h-auto w-56 justify-center p-0 text-center align-middle'
          data-content-field='site-title'
        >
          <h1
            id='siteTitle'
            className='m-0 w-56 items-center justify-center py-0 font-bold opacity-100'
          >
            <UnstyledLink
              href='/'
              data-shrink-original-size='18'
              className='relative m-0 w-full cursor-pointer whitespace-nowrap py-0 text-lg uppercase not-italic leading-5 text-teal-300'
            >
              Stephy + Ryan
            </UnstyledLink>
          </h1>
        </div>
        <label
          htmlFor='mobileNavToggle'
          className='absolute box-border inline-block h-5 w-5 cursor-pointer select-none p-0 text-right align-middle text-teal-300 md:hidden'
        >
          <div className='absolute top-0 right-0 h-px w-5 bg-teal-300'></div>
          <div className='absolute right-0 h-px w-5 bg-teal-300'></div>
          <div className='absolute right-0 h-px w-5 bg-teal-300'></div>
        </label>
        <div id='headerNav' className='mt-2 mb-0 ml-0 block align-middle'>
          <div id='mainNavWrapper' className='relative text-center'>
            <nav
              id='mainNavigation'
              data-content-field='navigation'
              className='block whitespace-normal'
            >
              <div className='m-0 inline-block align-middle'>
                <UnstyledLink
                  href='/#overview-section'
                  className='block cursor-pointer py-3 px-4 text-xs font-normal lowercase not-italic text-white hover:text-white'
                >
                  Overview
                </UnstyledLink>
              </div>

              <div className='m-0 inline-block align-middle'>
                <UnstyledLink
                  href='/#story-section'
                  className='block cursor-pointer py-3 px-4 text-xs font-normal lowercase not-italic text-teal-300 hover:text-white'
                >
                  Story
                </UnstyledLink>
              </div>

              <div className='m-0 inline-block align-middle'>
                <UnstyledLink
                  href='/#date-section'
                  className='block cursor-pointer py-3 px-4 text-xs font-normal lowercase not-italic text-teal-300 hover:text-white'
                >
                  Date
                </UnstyledLink>
              </div>

              <div className='m-0 inline-block align-middle'>
                <UnstyledLink
                  href='/#details-section'
                  className='block cursor-pointer py-3 px-4 text-xs font-normal lowercase not-italic text-teal-300 hover:text-white'
                >
                  Details
                </UnstyledLink>
              </div>

              <div className='m-0 inline-block align-middle'>
                <UnstyledLink
                  href='/#accomodations-section'
                  className='block cursor-pointer py-3 px-4 text-xs font-normal lowercase not-italic text-teal-300 hover:text-white'
                >
                  Accomodations
                </UnstyledLink>
              </div>

              <div className='m-0 inline-block align-middle'>
                <UnstyledLink
                  href='/#visiting-cartagena-section'
                  className='block cursor-pointer py-3 px-4 text-xs font-normal lowercase not-italic text-teal-300 hover:text-white'
                >
                  Visiting Cartagena
                </UnstyledLink>
              </div>

              <div className='m-0 inline-block align-middle'>
                <UnstyledLink
                  href='/#photos-section'
                  className='block cursor-pointer py-3 px-4 text-xs font-normal lowercase not-italic text-teal-300 hover:text-white'
                >
                  Photos
                </UnstyledLink>
              </div>

              <div className='m-0 inline-block align-middle'>
                <UnstyledLink
                  href='/#registry-section'
                  className='block cursor-pointer py-3 px-4 text-xs font-normal lowercase not-italic text-teal-300 hover:text-white'
                >
                  Registry
                </UnstyledLink>
              </div>

              <div className='m-0 hidden align-middle'>
                <UnstyledLink
                  href='/'
                  className='block cursor-pointer py-3 px-4 text-xs font-normal lowercase not-italic text-white hover:text-white'
                >
                  Home
                </UnstyledLink>
              </div>
            </nav>
          </div>

          {/* <style className="">
        .mobile-nav-toggle-label { display: inline-block; }
      </style> */}
        </div>
      </div>
    </header>
  );
}
