Follow these steps to understand and simulate the Diffie-Hellman key exchange protocol:

### Step 1: Public Information Setup

- Click the **"Generate Prime"** button to select a large prime number (p)
- The system will automatically set a corresponding generator (g) for the selected prime
- Click **"Another Generator"** to cycle through different valid generators for the current prime
- **Note:** Both the prime number and generator are public information that can be shared openly

### Step 2: Private Key Generation

- **Alice's Side:**
  - Click **"Generate A"** to create Alice's private key (a)
  - This private key must be kept secret by Alice
- **Bob's Side:**
  - Click **"Generate B"** to create Bob's private key (b)
  - This private key must be kept secret by Bob

### Step 3: Public Key Calculation

- **Alice's Side:**
  - Click **"Calculate g^a"** to compute Alice's public key using the formula: g^a mod p
  - This public key can be shared openly
- **Bob's Side:**
  - Click **"Calculate g^b"** to compute Bob's public key using the formula: g^b mod p
  - This public key can be shared openly

### Step 4: Key Exchange

- **Alice's Side:**
  - Click **"Send Public Key to Bob"** to transfer Alice's public key (g^a mod p) to Bob
- **Bob's Side:**
  - Click **"Send Public Key to Alice"** to transfer Bob's public key (g^b mod p) to Alice

### Step 5: Shared Secret Calculation

- **Alice's Side:**
  - Click **"Calculate Shared Secret"** to compute the final shared secret using Bob's public key
  - Formula: (g^b)^a mod p = g^(ab) mod p
- **Bob's Side:**
  - Click **"Calculate Shared Secret"** to compute the final shared secret using Alice's public key
  - Formula: (g^a)^b mod p = g^(ab) mod p

### Step 6: Verification

- Compare the shared secret values calculated by both Alice and Bob
- **Success:** If both values are identical, the Diffie-Hellman key exchange has been completed successfully
- **Security:** Note that even though all public information was transmitted openly, the shared secret remains secure due to the computational difficulty of the discrete logarithm problem

### Understanding the Security

- **Public Information:** Prime (p), Generator (g), Alice's public key (g^a mod p), Bob's public key (g^b mod p)
- **Private Information:** Alice's private key (a), Bob's private key (b)
- **Shared Secret:** g^(ab) mod p - known only to Alice and Bob
- **Eavesdropper's Challenge:** Cannot compute g^(ab) mod p from the public information without solving the discrete logarithm problem
