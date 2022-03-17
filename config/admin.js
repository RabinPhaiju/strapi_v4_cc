module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3724fd0963b501bf0e39e0f6324ad717'),
  },
});
