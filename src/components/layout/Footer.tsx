import * as React from 'react';

export default function Footer() {
  return (
    <footer
      id='footer'
      role='contentinfo'
      className='block bg-green-100 text-base leading-7 text-white'
    >
      <div className='m-auto box-border w-auto py-16 px-8 text-center leading-7'>
        <div className='relative block text-xs font-normal uppercase not-italic'>
          <nav className='block uppercase'>
            <div className='mx-auto mt-auto mb-4 inline-block uppercase text-white'>
              <a
                href='#header'
                className='block cursor-pointer border-b-0 py-3 px-4 uppercase leading-5 hover:text-stone-300'
              >
                Back To Top
              </a>
            </div>
          </nav>
        </div>

        <div
          id='siteInfo'
          className='mb-6 text-sm font-normal normal-case not-italic tracking-wider text-white'
        >
          <span className='block'>3012334363</span>
          <a
            href='mailto:ejescobar12@gmail.com'
            className='ml-4 block cursor-pointer whitespace-nowrap bg-transparent'
          >
            ejescobar12@gmail.com
          </a>
        </div>
        <div
          className='text-white'
          data-layout-label='Footer Content'
          data-type='block-field'
          data-updated-on='1456896653909'
          id='footerBlocks'
        >
          <div className='clear-both -mx-4 table w-auto'>
            <div className='float-none w-auto pr-0'>
              <div
                className='relative clear-none h-auto py-0 px-4'
                data-block-type='2'
                id='block-yui_3_17_2_1_1406587271305_2849'
              >
                <div className=''>
                  <p className='break-words text-center'>
                    Designed by
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href='https://www.ryankirsch.dev'
                      className='cursor-pointer border-b border-solid border-white bg-transparent'
                    >
                      Ryan Kirsch
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
