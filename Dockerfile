
# menggunakan image dari Docker Hub sebagai base image
FROM node:lts-slim


# menentukan working directory di dalam container
WORKDIR /app

# menyalin file package.json dan package-lock.json ke dalam container
COPY package*.json ./

# menjalankan perintah untuk menginstall dependency
RUN npm install

# menyalin seluruh file dari host ke dalam container
COPY . .

# menentukan perintah yang akan dijalankan saat container dijalankan
CMD ["npm", "start"]