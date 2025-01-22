function auth(u, cb) {
  setTimeout(() => {
    if (u.isAuthenticated) {
      console.log("User authenticated.");
      cb(null, u);
    } else {
      cb("Authentication failed.", null);
    }
  }, 1000);
}

function verifyPM(pm, cb) {
  setTimeout(() => {
    if (pm.isValid) {
      console.log("Payment method verified.");
      cb(null, pm);
    } else {
      cb("Payment method is invalid.", null);
    }
  }, 1000);
}

function processPM(pm, amt, cb) {
  setTimeout(() => {
    if (pm.balance >= amt) {
      console.log("Payment processed successfully.");
      cb(null, amt);
    } else {
      cb("Insufficient balance.", null);
    }
  }, 1000);
}

function updateBal(u, amt, cb) {
  setTimeout(() => {
    u.balance -= amt;
    console.log(`User's account balance updated: $${u.balance}`);
    cb(null, u);
  }, 1000);
}

function notify(u, success, cb) {
  setTimeout(() => {
    if (success) {
      console.log(`Email sent to ${u.email}: Payment successful.`);
    } else {
      console.log(`Email sent to ${u.email}: Payment failed.`);
    }
    cb(null);
  }, 1000);
}

function processFlow(u, pm, amt) {
  auth(u, (err, au) => {
    if (err) {
      console.log(err);
      return;
    }

    verifyPM(pm, (err, pmValid) => {
      if (err) {
        console.log(err);
        return;
      }

      processPM(pmValid, amt, (err, amtProcessed) => {
        if (err) {
          console.log(err);
          return;
        }

        updateBal(au, amtProcessed, (err, updatedU) => {
          if (err) {
            console.log(err);
            return;
          }

          notify(updatedU, true, (err) => {
            if (err) {
              console.log(err);
              return;
            }

            console.log("Payment process completed successfully.");
          });
        });
      });
    });
  });
}

const u = {
  isAuthenticated: true,
  email: "sample.com",
  balance: 100
};

const pm = {
  isValid: true,
  balance: 200
};

processFlow(u, pm, 50);
