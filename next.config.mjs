/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  images: {
    domains: ['tekika-nfts.s3.amazonaws.com', "pbs.twimg.com", "img.freepik.com", "encrypted-tbn2.gstatic.com", "tekika-nfts.s3.amazonaws.com"],
  },
};

export default nextConfig;
