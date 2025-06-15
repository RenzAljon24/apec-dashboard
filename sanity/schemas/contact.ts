export default {
  name: "contact",
  title: "Contact Information",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Contact Information",
    },
    {
      name: "address",
      title: "Address",
      type: "text",
      rows: 3,
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
    },
    {
      name: "officeHours",
      title: "Office Hours",
      type: "text",
      rows: 3,
    },
    {
      name: "socialMedia",
      title: "Social Media Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
              },
            },
            {
              name: "url",
              title: "URL",
              type: "url",
            },
          ],
        },
      ],
    },
  ],
}
