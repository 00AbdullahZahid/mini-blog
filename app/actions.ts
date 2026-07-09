'use server';

import { revalidatePath } from 'next/cache';

export async function updateItemAction(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  const age = formData.get('age');

  // Perform database updates here (e.g., Prisma, Supabase, Mongoose)
  console.log(`Updating item ${name} to name ${email} 
    to email ${message} to message ${age} to age`);

  // Refresh the data cache on the current page
  revalidatePath('/dashboard'); 
  return { success: true };
}