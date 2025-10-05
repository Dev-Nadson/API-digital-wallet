import type { FastifyRequest, FastifyReply } from 'fastify';
import { ZodError } from 'zod';
import { z } from "zod";

async function error_handler_middleware(
    error: unknown,
    request: FastifyRequest,
    reply: FastifyReply
) {
    if (error instanceof ZodError) {
        return reply.status(400).send({
            error: "Validation error",
            issues: z.treeifyError(error)
        })
    }

    console.error('Unhandled error:', error);

    return reply.status(500).send({
        error: "Internal server error",
        message: "An unexpected error has occurred"
    })
}

export { error_handler_middleware };