import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text", // Changed to 'text' for longer descriptions
      validation: (Rule) => Rule.max(500), // Optional max length
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'discount',
      title: 'Discount (%)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).max(100),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      validation: (Rule) => Rule.required().min(1), // Ensure categories are selected
    }),
    defineField({
      name: 'stock',
      title: 'Stock',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.max(50), // Optional max length
    }),
    defineField({
      name: 'status',
      title: 'Product Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Hot', value: 'hot' },
          { title: 'Sale', value: 'sale' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'price',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      const formattedPrice = subtitle ? `PKR ${subtitle.toFixed(2)}` : "Price Not Available"; // Format price with two decimals
      return {
        title: title,
        subtitle: formattedPrice,
        media: media,
      };
    },
  },
});
