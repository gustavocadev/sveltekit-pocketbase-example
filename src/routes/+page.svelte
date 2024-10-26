<script lang="ts">
  import { enhance } from '$app/forms';
  import { Button } from '$lib/components/ui/button';
  import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
  } from '$lib/components/ui/card';
  import { LogOutIcon } from 'lucide-svelte';

  let { data } = $props();
</script>

<div class="min-h-screen flex items-center justify-center">
  <Card class="w-full max-w-sm">
    <CardHeader>
      <CardTitle class="text-2xl font-bold text-center"
        >Welcome,{data.user.name}!</CardTitle
      >
    </CardHeader>
    <CardContent>
      <p class="text-center text-gray-600 mb-4">
        We're glad to see you here. Enjoy your stay!
      </p>
    </CardContent>
    <CardFooter>
      <form method="post" class="w-full" action="?/logout" use:enhance>
        <Button class="w-full" variant="outline" type="submit">
          <LogOutIcon class="mr-2 h-4 w-4" /> Sign Out
        </Button>
      </form>
    </CardFooter>
  </Card>
</div>
