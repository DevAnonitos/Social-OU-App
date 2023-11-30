#!/bin/bash

# Dừng các container Docker hoặc các dịch vụ khác nếu cần
# docker-compose down

# Lấy phiên bản sản phẩm (nếu cần)
# VERSION=$(git describe --tags --abbrev=0)

echo "Building the project..."
npm run build

# Copy các file cần thiết (nếu cần) vào thư mục triển khai
# cp -R someFolder/build/* deploymentFolder/

# Bật lại các container Docker hoặc các dịch vụ khác (nếu cần)
# docker-compose up -d

echo "Deployment complete!"
