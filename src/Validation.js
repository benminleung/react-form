const Validation = allState => {
  return {
    name: /^[a-zA-Z ]+$/.test(allState.name) ? "" : "Invalid name",
    email: /^[\w\.-]+@\w+\.\w{2,3}$/.test(allState.email)
      ? ""
      : "Invalid email",
    email2: allState.email === allState.email2 ? "" : "Email not matching",
    phone: /^([\d+ -])+$/.test(allState.phone) ? "" : "Invalid phone",
    address: /\S+/.test(allState.address) ? "" : "Invalid address",
    city: /\S+/.test(allState.city) ? "" : "Invalid city",
    state: /\S+/.test(allState.state) ? "" : "Invalid state",
    country: /\S+/.test(allState.country) ? "" : "Invalid country",
    zip: /\S+/.test(allState.zip) ? "" : "Invalid zip",
    hearAboutUs: /\S+/.test(allState.hearAboutUs) ? "" : "Invalid hearAboutUs",
    dicipline1: /\S+/.test(allState.dicipline1) ? "" : "Invalid dicipline1",
    // dicipline2: /\S+/.test(allState.dicipline2)
    // ? ''
    // : 'Invalid dicipline2',
    // location: /\S+/.test(allState.location)
    // ? ''
    // : 'Invalid location',
    portfolio: /\S+/.test(allState.portfolio) ? "" : "Invalid portfolio",
    moreInfo: /\S+/.test(allState.moreInfo) ? "" : "Invalid moreInfo"
  };
};

export default Validation;
