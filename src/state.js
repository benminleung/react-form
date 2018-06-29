export const state = {
    name: '',
    email: '',
    email2: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zip: '',
    hearAboutUs: '',
    dicipline1: '',
    dicipline2: {
      visual: false,
      ux: false,
      frontEnd: false,
      none: false
    },
    // should have them return as string
    location: {
      austin: false,
      newYork: false,
      toronto: false,
      shanghai: false,
      dublin: false,
      hursley: false,
      boeblingen: false,
      somewhere: false
    },
    portfolio: '',
    moreInfo: '',
    isTouched: {
      name: false,
      email: false,
      email2: false,
      phone: false,
      address: false,
      city: false,
      state: false,
      country: false,
      zip: false,
      hearAboutUs: false,
      dicipline1: false,
      portfolio: false,
      moreInfo: false,
    }
}