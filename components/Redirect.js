
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const validUrls = [
  '/home',
  '/about',
  '/contact',
  '/projects',
  // Add other valid relative URLs here
];

const Redirect = ({ url }) => {
  const router = useRouter();

  useEffect(() => {
    if (validUrls.includes(url)) {
      router.push(url);
    } else {
      console.error('Invalid URL redirection attempt:', url);
      // Optionally, redirect to a default safe page
      router.push('/error');
    }
  }, [url, router]);

  return null;
};

export default Redirect;