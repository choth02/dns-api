// validator.js

/**
 * Validate and sanitize a domain name.
 * @param {string} domain - The domain name to validate.
 * @returns {string|null} - Returns the sanitized domain name or null if invalid.
 */
function validateDomain(domain) {
    // Regular expression for validating a domain name
    const domainPattern = /^(?!-)[A-Za-z0-9-]{1,63}(?<!-)(\.[A-Za-z]{2,})+$/;

    // Check if domain matches the pattern
    if (domainPattern.test(domain)) {
        // Sanitize domain by trimming and converting to lowercase
        return domain.trim().toLowerCase();
    }
    return null; // Return null if invalid
}

// Export the validateDomain function
module.exports = { validateDomain };