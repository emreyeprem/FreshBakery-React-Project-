const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_test_aYZkqibzho9OQ5duPHqv7OaO'
  : 'pk_test_aYZkqibzho9OQ5duPHqv7OaO';

export default STRIPE_PUBLISHABLE;
