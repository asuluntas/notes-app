import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { HomePage, mapDispatchToProps } from '../index';
import { changeNote, addNote } from '../actions';
import configureStore from '../../../configureStore';

describe('<HomePage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage
            note=""
            loadingAddNote={false}
            addNoteError={false}
            recentlyAddedNote={null}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should not call onSubmitForm if note is an empty string', () => {
    const submitSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage onChangeNote={() => {}} onSubmitForm={submitSpy} />
        </IntlProvider>
      </Provider>,
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  it('should not call onSubmitForm if note is null', () => {
    const submitSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage note="" onChangeNote={() => {}} onSubmitForm={submitSpy} />
        </IntlProvider>
      </Provider>,
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeNote', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeNote).toBeDefined();
      });

      it('should dispatch changeNote when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const note = 'a test note';
        result.onChangeNote({ target: { value: note } });
        expect(dispatch).toHaveBeenCalledWith(changeNote(note));
      });
    });

    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should dispatch addNote when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const note = 'a test note';
        result.onSubmitForm({ target: { value: note } });
        expect(dispatch).toHaveBeenCalledWith(addNote(note));
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onSubmitForm(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
