const mongoose = require("mongoose")

const Webpage = mongoose.model(
  "Webpage",
  new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    cid: { type: String, required: true },
    subdomain: String,
    data: {
      type: {
        _id: false,
        navbar: {
          websiteName: { type: String, required: true },
          links: [
            {
              type: String,
              required: true,
            },
          ],
        },
        landing: {
          title: { type: String, required: true },
          subTitle: { type: String, required: true },
          hashTagTitle: { type: String, required: true },
          hashTags: [
            {
              type: String,
              required: true,
            },
          ],
          categories: [
            {
              type: {
                title: { type: String, required: true },
                _id: false,
              },
              required: true,
            },
          ],
          userimg: { type: String, required: true },
          name: { type: String, required: true },
          pronoun: { type: String, required: true },
        },
        value: {
          title: { type: String, required: true },
          description: { type: String, required: true },
          TVName: { type: String, required: true },
          video: { type: String, required: true },
          links: [
            {
              title: { type: String, required: true },
              _id: false,
            },
          ],
          buttonText: { type: String, required: true },
        },
        vision: {
          title: { type: String, required: true },
          description: { type: String, required: true },
        },
        CV: {
          present: {
            title: { type: String, required: true },
            highlights: [
              {
                type: {
                  year: { type: String, required: true },
                  text: { type: String, required: true },
                  _id: false,
                },
                required: true,
              },
            ],
          },
          past: {
            type: {
              title: { type: String, required: true },
              highlights: [{ type: String, required: true }],
              _id: false,
            },
            required: true,
          },
          future: {
            type: {
              title: { type: String, required: true },
              text: { type: String, required: true },
              _id: false,
            },
            required: true,
          },
        },
        available: {
          title: { type: String, required: true },
          marque: [
            {
              heading: { type: String, required: true },
              _id: false,
            },
          ],
          linkedin: {
            url: { type: String, required: true },
            hide: { type: Boolean, required: true },
          },
          instagram: {
            url: { type: String, required: true },
            hide: { type: Boolean, required: true },
          },
          twitter: {
            url: { type: String, required: true },
            hide: { type: Boolean, required: true },
          },
          email: {
            address: { type: String, required: true },
            hide: { type: Boolean, required: true },
          },
        },
      },
      required: true,
    },
  })
)

module.exports = Webpage
