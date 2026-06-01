class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        const uniqueEmails = new Set();

        for (const email of emails) {

            let [localName, domainName] = email.split('@');
            localName = localName.split('+')[0];
            localName = localName.replace(/\./g, '');
            uniqueEmails.add(`${localName}@${domainName}`);
        }
        return uniqueEmails.size;
    }
}
