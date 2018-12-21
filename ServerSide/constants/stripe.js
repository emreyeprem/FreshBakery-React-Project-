const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_test_gTmTHsMwIFY57NNbYEkKKtgk'
    : 'sk_test_gTmTHsMwIFY57NNbYEkKKtgk';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
