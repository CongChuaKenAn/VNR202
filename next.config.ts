/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "nhandan.vn" },
      { protocol: "http", hostname: "baohagiang.vn" },
      { protocol: "https", hostname: "media.vov.vn" },
      { protocol: "https", hostname: "i1-vnexpress.vnecdn.net" },
      { protocol: "https", hostname: "media.thuonghieucongluan.vn" },
      { protocol: "https", hostname: "resource.kinhtedothi.vn" },
      { protocol: "https", hostname: "hnm.1cdn.vn" },
      { protocol: "https", hostname: "mediabls.mediatech.vn" },
      { protocol: "https", hostname: "media.baoquankhu7.vn" }, // thêm host mới
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "vov.vn",
      },
      {
        protocol: "https",
        hostname: "noibo.kiengiang.dcs.vn",
      },
      {
        protocol: "https",
        hostname: "dienbientv.vn",
      },
      {
        protocol: "https",
        hostname: "baoapbac.vn",
      },
      {
        protocol: "https",
        hostname: "nvsk.vnanet.vn",
      },
      {
        protocol: "https",
        hostname: "baoquocte.vn",
      },
      {
        protocol: "https",
        hostname: "thanhnienduongsat.vn",
      },
      {
        protocol: "https",
        hostname: "special.nhandan.vn",
      },
      {
        protocol: "https",
        hostname: "cdnimage.daihoidang.vn",
      },
      {
        protocol: "https",
        hostname: "dalat.lamdong.dcs.vn",
      },
      { protocol: "https", hostname: "bcp.cdnchinhphu.vn" },
    ],
  },
};

module.exports = nextConfig;
