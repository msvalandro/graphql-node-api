"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./resources/user/user.schema");
const post_schema_1 = require("./resources/post/post.schema");
const comment_schema_1 = require("./resources/comment/comment.schema");
const token_schema_1 = require("./resources/token/token.schema");
const Mutation = `
	type Mutation {
		${user_schema_1.userMutations}
		${post_schema_1.postMutations}
		${comment_schema_1.commentMutations}
		${token_schema_1.tokenMutations}
	}
`;
exports.Mutation = Mutation;
