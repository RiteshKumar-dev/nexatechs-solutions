'use client';

import Link from 'next/link';
import { FiTwitter, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';

export default function FooterComponent() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full md:max-w-screen-xl p-4 md:py-8">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Brand Center
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Help Center
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Discord Server
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Twitter
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Facebook
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Licensing
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Download
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  iOS
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Android
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Windows
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  macOS
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2025{' '}
            <Link href="/" className="hover:underline">
              Startup
            </Link>
            . All Rights Reserved.
          </span>

          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse text-gray-400">
            <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
              <FiTwitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
              <FiLinkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
              <FiGithub className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
              <FiSend className="w-5 h-5" />
              <span className="sr-only">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
