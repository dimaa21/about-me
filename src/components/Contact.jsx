import { useEffect, useState } from 'react';

const FORM_URL = 'https://formspree.io/f/mgavwvpq';

const emptyErrors = { name: '', email: '', message: '' };

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '', gotcha: '' });
  const [errors, setErrors] = useState(emptyErrors);
  const [sending, setSending] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    if (!modalOpen) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [modalOpen]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = {
      name: values.name.trim() ? '' : 'Please enter your name.',
      email: values.email.trim() ? '' : 'Please enter your email.',
      message: values.message.trim() ? '' : 'Please enter your message.'
    };

    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      return;
    }

    setSending(true);

    try {
      const formData = new FormData();
      formData.append('name', values.name.trim());
      formData.append('email', values.email.trim());
      formData.append('message', values.message.trim());
      formData.append('_subject', 'New message from about-me');
      formData.append('_gotcha', values.gotcha);

      const response = await fetch(FORM_URL, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setModalOpen(true);
      document.body.style.overflow = 'hidden';
      setValues({ name: '', email: '', message: '', gotcha: '' });
      setErrors(emptyErrors);
    } catch (error) {
      alert('An error occurred: ' + error.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="form" id="contact">
      <div className="container">
        <h2 className="main-title">Get in touch</h2>
        <form className="form-body" onSubmit={onSubmit} noValidate>
          <label className="field">
            <span>Name</span>
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Your name"
              value={values.name}
              onChange={onChange}
              required
            />
            <div className="error-message">{errors.name}</div>
          </label>

          <label className="field">
            <span>Email</span>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="you@email.com"
              value={values.email}
              onChange={onChange}
              required
            />
            <div className="error-message">{errors.email}</div>
          </label>

          <label className="field">
            <span>Message</span>
            <textarea
              className="input"
              name="message"
              placeholder="Tell me about your project"
              rows="5"
              value={values.message}
              onChange={onChange}
              required
            />
            <div className="error-message">{errors.message}</div>
          </label>

          <input
            type="text"
            name="gotcha"
            className="gotcha"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={values.gotcha}
            onChange={onChange}
          />

          <button type="submit" disabled={sending}>
            {sending ? 'Sending...' : 'Send message'}
          </button>
        </form>
      </div>

      <div
        className={`modal${modalOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeModal();
          }
        }}
      >
        <div className="modal-content">
          <button className="close-button" type="button" aria-label="Close" onClick={closeModal}>
            &times;
          </button>
          <div className="modal-icon">✓</div>
          <h3 id="modal-title">Message sent</h3>
          <p>Thank you! Your message has been sent.</p>
        </div>
      </div>
    </section>
  );
}
