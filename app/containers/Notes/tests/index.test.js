// import React from 'react';
// import { render } from 'react-testing-library';
// import { IntlProvider } from 'react-intl';
// import { Provider } from 'react-redux';
// import { browserHistory } from 'react-router-dom';

// import { Notes, mapDispatchToProps } from '../index';
// import { loadNotes } from '../actions';
// import configureStore from '../../../configureStore';

// describe('<Notes />', () => {
//   let store;

//   beforeAll(() => {
//     store = configureStore({}, browserHistory);
//   });

//   it('should render and match the snapshot', () => {
//     const {
//       container: { firstChild },
//     } = render(
//       <Provider store={store}>
//         <IntlProvider locale="en">
//           <Notes loading={false} error={false} notes={false} />
//         </IntlProvider>
//       </Provider>,
//     );
//     expect(firstChild).toMatchSnapshot();
//   });

// it('should fetch the notes on mount', () => {
//   const submitSpy = jest.fn();
//   render(
//     <Provider store={store}>
//       <IntlProvider locale="en">
//         <Notes
//           username="Not Empty"
//           onChangeUsername={() => {}}
//           onSubmitForm={submitSpy}
//         />
//       </IntlProvider>
//     </Provider>,
//   );
//   expect(submitSpy).toHaveBeenCalled();
// });

// it('should not call onSubmitForm if username is an empty string', () => {
//   const submitSpy = jest.fn();
//   render(
//     <Provider store={store}>
//       <IntlProvider locale="en">
//         <HomePage onChangeUsername={() => {}} onSubmitForm={submitSpy} />
//       </IntlProvider>
//     </Provider>,
//   );
//   expect(submitSpy).not.toHaveBeenCalled();
// });

// it('should not call onSubmitForm if username is null', () => {
//   const submitSpy = jest.fn();
//   render(
//     <Provider store={store}>
//       <IntlProvider locale="en">
//         <HomePage
//           username=""
//           onChangeUsername={() => {}}
//           onSubmitForm={submitSpy}
//         />
//       </IntlProvider>
//     </Provider>,
//   );
//   expect(submitSpy).not.toHaveBeenCalled();
// });

// describe('mapDispatchToProps', () => {
//   describe('onLoadNotes', () => {
//     it('should be injected', () => {
//       const dispatch = jest.fn();
//       const result = mapDispatchToProps(dispatch);
//       expect(result.onLoadNotes).toBeDefined();
//     });

//     it('should dispatch loadNotes when called', () => {
//       const dispatch = jest.fn();
//       const result = mapDispatchToProps(dispatch);
//       result.loadNotes();
//       expect(dispatch).toHaveBeenCalledWith(loadNotes());
//     });
//   });

// describe('onSubmitForm', () => {
//   it('should be injected', () => {
//     const dispatch = jest.fn();
//     const result = mapDispatchToProps(dispatch);
//     expect(result.onSubmitForm).toBeDefined();
//   });

//   it('should dispatch loadRepos when called', () => {
//     const dispatch = jest.fn();
//     const result = mapDispatchToProps(dispatch);
//     result.onSubmitForm();
//     expect(dispatch).toHaveBeenCalledWith(loadRepos());
//   });

//   it('should preventDefault if called with event', () => {
//     const preventDefault = jest.fn();
//     const result = mapDispatchToProps(() => {});
//     const evt = { preventDefault };
//     result.onSubmitForm(evt);
//     expect(preventDefault).toHaveBeenCalledWith();
//   });
// });
//   });
// });
