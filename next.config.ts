import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Mantém uma configuração padrão e recomendada
  // Todas as outras configurações foram temporariamente removidas para diagnóstico.
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'placehold.co',
  //       port: '',
  //       pathname: '/**',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'i.imgur.com',
  //       port: '',
  //       pathname: '/**',
  //     }
  //   ],
  // },
};

export default nextConfig;
