import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
  if (!locals.user) {
    redirect(302, '/login');
  }

  return {
    user: locals.user,
  };
};

export const actions = {
  logout: async ({ locals }) => {
    locals.pb.authStore.clear();
  },
};
