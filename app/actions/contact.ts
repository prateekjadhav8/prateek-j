'use server'

export interface ContactState {
  status: 'idle' | 'success' | 'error'
  message: string
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!name || !email || !message) {
    return { status: 'error', message: 'Please fill in all fields.' }
  }
  if (!isEmail(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }
  if (message.length < 10) {
    return {
      status: 'error',
      message: 'Your message is a little short — add a few more details.',
    }
  }

  // Simulate delivery latency. Wire this up to an email provider or database.
  await new Promise((resolve) => setTimeout(resolve, 800))
  console.log('[v0] contact submission:', { name, email, message })

  return {
    status: 'success',
    message: "Thanks for reaching out — I'll get back to you within 24 hours.",
  }
}
