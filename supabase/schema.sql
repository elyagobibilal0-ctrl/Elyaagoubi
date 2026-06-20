-- Users
create table users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  full_name text,
  role text not null default 'customer',
  phone text,
  locale text not null default 'en',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Garages
create table garages (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references users(id) on delete cascade,
  name text not null,
  address text,
  city text,
  phone text,
  email text,
  description text,
  location geography(point, 4326),
  rating numeric(3,2) default 0,
  verified boolean default false,
  open boolean default false,
  photos text[],
  logo text,
  working_hours jsonb,
  services text[],
  employee_count int default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Employees
create table employees (
  id uuid primary key default gen_random_uuid(),
  garage_id uuid references garages(id) on delete cascade,
  name text not null,
  position text,
  phone text,
  status text default 'available',
  photo text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Bookings
create table bookings (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references users(id) on delete cascade,
  garage_id uuid references garages(id) on delete cascade,
  service text,
  vehicle_brand text,
  vehicle_model text,
  scheduled_at timestamptz,
  status text default 'booking_confirmed',
  total_amount numeric(10,2),
  currency text default 'MAD',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Roadside requests
create table roadside_requests (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references users(id) on delete cascade,
  garage_id uuid references garages(id),
  name text,
  phone text,
  vehicle_brand text,
  vehicle_model text,
  issue text,
  location geography(point, 4326),
  photo text,
  status text default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Reviews
create table reviews (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  garage_id uuid references garages(id) on delete cascade,
  rating int check (rating >= 1 and rating <= 5),
  title text,
  comment text,
  photos text[],
  verified boolean default false,
  created_at timestamptz not null default now()
);

-- Vehicles
create table vehicles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  brand text,
  model text,
  year int,
  mileage int,
  vin text,
  documents text[],
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Repair history
create table repair_history (
  id uuid primary key default gen_random_uuid(),
  vehicle_id uuid references vehicles(id) on delete cascade,
  garage_id uuid references garages(id),
  issue text,
  diagnosis text,
  parts_cost numeric(10,2),
  labor_cost numeric(10,2),
  total_cost numeric(10,2),
  status text,
  completed_at timestamptz,
  created_at timestamptz not null default now()
);

-- Loyalty & referrals
create table loyalty_points (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  points int default 0,
  updated_at timestamptz not null default now()
);

create table referrals (
  id uuid primary key default gen_random_uuid(),
  referrer_id uuid references users(id) on delete cascade,
  referred_email text,
  code text not null unique,
  used boolean default false,
  reward_points int default 0,
  created_at timestamptz not null default now()
);

-- Subscriptions & payments
create table subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  plan text,
  status text,
  starts_at timestamptz,
  ends_at timestamptz,
  created_at timestamptz not null default now()
);

create table payments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  booking_id uuid references bookings(id),
  amount numeric(10,2),
  currency text default 'MAD',
  method text,
  status text,
  stripe_payment_intent_id text,
  created_at timestamptz not null default now()
);

create index on garages(city);
create index on garages(location);
create index on bookings(customer_id);
create index on reviews(garage_id);
create index on roadside_requests(location);
