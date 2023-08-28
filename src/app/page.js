"use client";
import {
  Button,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Text,
  Textarea,
  Title,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating size="lg" />
      <Textarea
        label="Your review"
        placeholder="Do you enjoy eating?"
        mt="xs"
        minRows={3}
      />
      <Button color="orange" mt="xs">
        Submit Review
      </Button>
      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Elon Musk</Title>
        <Rating size="sm" defaultValue={5} />
      </Group>
      <Text align="center" c="dimmed">
        Best pizza in this world. I give you X score.
      </Text>
      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating size="sm" defaultValue={4} />
      </Group>
      <Text align="center" c="dimmed">
        My favourite part is pepperoni
      </Text>

      <Pagination mt="md" position="center" total={20} color="orange" />
      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Santhod Khiawaubon 650612101
      </Text>
    </Container>
  );
}
