const BASE_URL = 'https://openapi.programming-hero.com/api';

export async function getCategories() {
  try {
    const res = await fetch(`${BASE_URL}/news/categories`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error('Failed to fetch categories');
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return {
      news_category: [
        { category_id: "0", category_name: "All News" },
        { category_id: "1", category_name: "Breaking News" },
        { category_id: "2", category_name: "Regular News" },
        { category_id: "3", category_name: "International News" },
        { category_id: "4", category_name: "Sports" },
        { category_id: "5", category_name: "Entertainment" },
        { category_id: "6", category_name: "Culture" },
        { category_id: "7", category_name: "Arts" },
      ],
    };
  }
}

export async function getNewsByCategory(categoryId = '0') {
  try {
    // If categoryId is '0', fetch '0' or '01'
    const idToFetch = categoryId === '0' ? '0' : categoryId;
    const res = await fetch(`${BASE_URL}/news/category/${idToFetch}`, {
      next: { revalidate: 600 },
    });
    if (!res.ok) throw new Error(`Failed to fetch news for category ${categoryId}`);
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error(`Error fetching news for category ${categoryId}:`, error);
    return [];
  }
}

export async function getNewsById(newsId) {
  try {
    const res = await fetch(`${BASE_URL}/news/${newsId}`, {
      next: { revalidate: 600 },
    });
    if (!res.ok) throw new Error(`Failed to fetch news details for ${newsId}`);
    const data = await res.json();
    return data.data?.[0] || null;
  } catch (error) {
    console.error(`Error fetching news details for ${newsId}:`, error);
    return null;
  }
}
