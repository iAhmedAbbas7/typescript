// <== GENERICS == >
const echo = <T>(arg: T): T => arg;
const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj(null));
console.log(isObj("Ahmed"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "Ahmed" }));
const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof object).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Ahmed"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "Ahmed" }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
interface BoolCheck<T> {
  value: T;
  is: boolean;
}
const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof object).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};
interface HasID {
  id: number;
}
const processUser = <T extends HasID>(user: T): T => {
  return user;
};
console.log(processUser({ id: 1, name: "Ahmed" }));
const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};
const usersArray = [
  {
    id: 1,
    username: "amal.dev",
    email: "amal.dev@example.com",
    displayName: "Amal Dev",
    firstName: "Amal",
    lastName: "Khan",
    bio: "Full-stack dev → React, Node, TypeScript. Coffee enthusiast.",
    age: 28,
    roles: ["user", "maintainer"],
    isActive: true,
    createdAt: "2023-06-18T09:24:00.000Z",
    lastLoginAt: "2025-09-16T21:12:45.000Z",
    address: {
      street: "42 Orchard Lane",
      city: "Karachi",
      state: "Sindh",
      postalCode: "75500",
      country: "Pakistan",
      coords: { lat: 24.8615, lng: 67.0099 },
    },
    phone: "+92-300-555-0101",
    altPhones: ["+92-21-555-0123"],
    socials: {
      github: "amal-dev",
      twitter: "amal_codes",
      linkedin: "in/amal-khan",
      website: "https://amal.dev",
    },
    preferences: {
      language: "en",
      timezone: "Asia/Karachi",
      newsletter: true,
      notifications: { email: true, sms: false, push: true },
      theme: "dark",
    },
    stats: {
      posts: 72,
      comments: 431,
      followers: 1840,
      following: 310,
      reputation: 1432,
    },
    devices: [
      {
        id: "d_01",
        type: "laptop",
        os: "Windows 11",
        lastUsedAt: "2025-09-16T20:55:00.000Z",
        ip: "103.45.67.89",
      },
      {
        id: "d_02",
        type: "mobile",
        os: "Android 14",
        lastUsedAt: "2025-09-15T07:10:30.000Z",
      },
    ],
    tags: ["typescript", "mern", "testing", "open-source"],
    metadata: {
      preferredEditor: "vscode",
      timezoneOffsetMinutes: 300,
      betaTester: true,
    },
  },

  {
    id: 2,
    username: "m.abbas",
    email: "abbas.work@example.com",
    displayName: "Mohammad Abbas",
    firstName: "Mohammad",
    lastName: "Abbas",
    bio: "Backend engineer. Likes designing APIs, databases, and good error messages.",
    age: 32,
    roles: ["user", "admin"],
    isActive: false,
    createdAt: "2021-02-03T14:50:00.000Z",
    lastLoginAt: "2024-12-01T03:22:10.000Z",
    address: {
      street: "7 Garden Ave",
      city: "Lahore",
      postalCode: "54000",
      country: "Pakistan",
      coords: { lat: 31.5204, lng: 74.3587 },
    },
    phone: "+92-42-333-6677",
    altPhones: [],
    socials: {
      github: "Abbas",
      linkedin: "in/mohammad-abbas",
      website: "https://abbas.codes",
    },
    preferences: {
      language: "en",
      timezone: "Asia/Karachi",
      newsletter: false,
      notifications: { email: true, sms: true, push: false },
      theme: "system",
    },
    stats: {
      posts: 19,
      comments: 97,
      followers: 420,
      following: 210,
      reputation: 583,
    },
    devices: [
      {
        id: "d_21",
        type: "desktop",
        os: "Ubuntu 24.04",
        lastUsedAt: "2024-12-01T03:20:00.000Z",
        ip: "103.56.78.12",
      },
    ],
    tags: ["api", "nodejs", "databases", "sql"],
    metadata: {
      twoFactorEnabled: true,
      recoveryCodesLeft: 3,
      notes: "Account inactive pending verification",
    },
  },
];
console.log(getUsersProperty(usersArray, "isActive"));
class StateObject<T> {
  private data: T;
  constructor(value: T) {
    this.data = value;
  }
  get state(): T {
    return this.data;
  }
  set state(value: T) {
    this.data = value;
  }
}
const store = new StateObject("Ahmed's State");
console.log(store.state);
store.state = "New State";
console.log(store.state);
const myState = new StateObject<(string | number | boolean)[]>([12]);
myState.state = [1, "Ahmed", true];
console.log(myState.state);
