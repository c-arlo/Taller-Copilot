#!/bin/bash

# Exit on error
set -e

# Run database migrations
echo "Running database migrations..."
npm run migrate

# Seed the database with initial data
echo "Seeding the database..."
npm run seed

echo "Database setup completed successfully."