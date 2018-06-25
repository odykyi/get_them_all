# ---- Deps ---- #
FROM node:10 as deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm set progress=false
RUN npm install --only=production
RUN cp -R node_modules prod_node_modules
RUN npm install

# ---- PreRelease ---- #
FROM node:10 as prerelease
WORKDIR /app
COPY --from=deps /app/prod_node_modules ./node_modules
COPY . ./

# ---- Release ---- #
FROM node:10 as release
ENV NODE_ENV production
WORKDIR /app
EXPOSE 8000
COPY --from=prerelease /app ./
ENTRYPOINT ["npm", "start"]
