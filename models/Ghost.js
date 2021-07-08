import GhostContentAPI from "@tryghost/content-api";

class Ghost {
    constructor() {
        this.setup();
    }

    setup() {
        this.api = new GhostContentAPI({
            url: process.env.NEXT_PUBLIC_GHOST_API_HOST,
            key: process.env.NEXT_PUBLIC_GHOST_API_KEY,
            version: "v3",
        });
    }

    getBlogOwnerAuthor() {
        return this.api.authors.read({ slug: "pol-piella" });
    }

    getBlogPosts() {
        return this.api.posts.browse({ include: "tags,authors" });
    }

    getBlogPost(slug) {
        return this.api.posts.read({ slug: slug }, { include: "tags,authors" });
    }

    getBlogPostsForTag(slug) {
        return this.api.posts.browse({ filter: `tag:${slug}`, include: "tags,authors" });
    }

    getTags() {
        return this.api.tags.browse();
    }

    getTag(slug) {
        return this.api.tags.read({ slug: slug });
    }
}

export const ghostAPI = (() => new Ghost())();
