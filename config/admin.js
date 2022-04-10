module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3ddd9d0359ae80a5aad6f7f7cdc463ff'),
  },
});
