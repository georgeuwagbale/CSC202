FROM nestjs/cli

COPY --from=builder /nest-waf-primer/package.json ./package.json
COPY --from=builder /nest-waf-primer/package-lock.json ./package-lock.json
COPY --from=builder /nest-waf-primer/dist ./dist
COPY --from=builder /nest-waf-primer/node_modules ./node_modules
COPY --from=builder /nest-waf-primer/tsconfig.json ./tsconfig.json
COPY --form=builder /nest-waf-primer/tsconfig.build.json ./tsconfig.build.json

CMD ["sh", "-c", "npm run start:dev"]