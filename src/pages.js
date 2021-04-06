import * as Yup from 'yup';

import Greeting from './greeting';
import Email from './email';
import Name from './name';
import SongsNote from './songs-note';
import Songs from './songs';
import Categories from './categories';
import Channel from './channel';
import Subscribers from './subscribers';
import ThankYou from './thank-you';
import Description from './description';

// initial form values
export const initialValues = {
  email: '',
  name: '',
  songs: [],
  description: '',
  categories: [],
  channel: '',
  subscribers: ''
};

// object to hold order, components, and validation of each page
export const pages = {
  0: { component: Greeting },
  1: {
    valueKey: 'email',
    component: Email,
    validation: Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Required')
    })
  },
  2: {
    valueKey: 'name',
    component: Name,
    validation: Yup.object().shape({
      name: Yup.string().required('Required')
    })
  },
  3: {
    component: SongsNote
  },
  4: {
    valueKey: 'songs',
    component: Songs,
    validation: Yup.object().shape({
      songs: Yup.array().min(1, 'Select at least one song')
    })
  },
  5: {
    valueKey: 'description',
    component: Description,
    validation: Yup.object().shape({
      description: Yup.string()
        .required('Required')
        .min(
          150,
          'Please write at least a few sentences. This is important to me.'
        )
    })
  },
  6: {
    valueKey: 'categories',
    component: Categories,
    validation: Yup.object().shape({
      categories: Yup.array().min(1, 'Select at least one category')
    })
  },
  7: {
    valueKey: 'channel',
    component: Channel,
    validation: Yup.object().shape({
      channel: Yup.string().required('Required')
    })
  },
  8: {
    valueKey: 'subscribers',
    component: Subscribers,
    validation: Yup.object().shape({
      subscribers: Yup.string().required('Required')
    })
  },
  9: {
    component: ThankYou
  }
};

export const lastPage = Math.max(...Object.keys(pages));
